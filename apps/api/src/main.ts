import express from 'express';
import * as path from 'path';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to NX Monorepo API!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Users endpoints
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() }
    ]
  });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  res.json({
    success: true,
    data: { 
      id: Date.now().toString(), 
      name, 
      email, 
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
});

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Something went wrong!' });
});

app.listen(port, host, () => {
  console.log(`🚀 API Server running at http://${host}:${port}`);
  console.log(`📊 Health check: http://${host}:${port}/api/health`);
});
