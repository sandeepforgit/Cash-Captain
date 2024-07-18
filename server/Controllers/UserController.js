import {User} from "../models/UserModel.js";
import jwt from 'jsonwebtoken'; 

const registerUser = async (req, res) => {
  
  const { username, email, password } = req.body;
  
  
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    


    const user = await User.create({
      username,
      email,
      password,
    });
    
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const authenticateUser =  (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  else {
    jwt.verify(token, 'your_jwt_secret', async (err, user) => {
      if (err) return res.status(403).json({ message: 'Token is not valid' });
      const userr = await User.findById(user.id).select('-password')
      res.json({ userr });
    });
  }
}

const addIncome = async (req, res) => {
  const { income, idescription, username } = req.body;
  try {
    const user = await User.findOne({username});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newIncome = user.income + income;
    const newBalance = user.balance + income;

    const updatedUser = await User.findOneAndUpdate(
      { username},
      {
        income: newIncome,
        balance: newBalance,
        $push: {
          transactions: {
              $each: [{ type: 'income', Description: idescription, income: income, date: Date() }],
              $position: 0 
          }
      }
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const addExpense = async (req, res) => {
  const { expense, edescription, username } = req.body;

  try {
    const user = await User.findOne({username});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newExpense = user.expense + expense;
    const newBalance = user.balance - expense;

    const updatedUser = await User.findOneAndUpdate(
    {username},
      {
        expense: newExpense,
        balance: newBalance,
        $push: {
          transactions: {
              $each: [{ type: 'expense', Description: edescription, expense: expense, date: Date() }],
              $position: 0 
          }
      }
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


const logoutUser = (req, res) => {
  res.json({ message: 'Logged out successfully' });
};



export { registerUser, loginUser, authenticateUser, addIncome, addExpense, logoutUser };
