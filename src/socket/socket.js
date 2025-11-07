import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'https://chat-app-server-0tl2.onrender.com';

console.log('🔌 Connecting to:', SOCKET_URL); // Debug log

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  transports: ['websocket', 'polling'], // Add this for better compatibility
  withCredentials: true, // Add this if using credentials
});

// Debug listeners
socket.on('connect', () => {
  console.log('✅ Connected to server:', socket.id);
});

socket.on('connect_error', (error) => {
  console.error('❌ Connection error:', error.message);
});

socket.on('disconnect', (reason) => {
  console.log('🔌 Disconnected:', reason);
});

export default socket;