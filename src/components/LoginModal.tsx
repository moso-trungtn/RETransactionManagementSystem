import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { FileText, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function LoginModal({ open, onClose, onLogin }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    onLogin();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden gap-0">
        <VisuallyHidden>
          <DialogTitle>Sign In to TransactPro</DialogTitle>
          <DialogDescription>
            Enter your email and password to access your transaction management dashboard
          </DialogDescription>
        </VisuallyHidden>
        
        {/* Orange Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 pt-6 pb-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-7 h-7 text-orange-500" />
            </div>
          </div>
          <h2 className="text-white text-center mb-1" style={{ fontSize: '28px', fontWeight: '700' }}>
            TransactPro
          </h2>
          <p className="text-orange-50 text-center" style={{ fontSize: '14px' }}>
            Real Estate Transaction Management
          </p>
        </div>

        {/* Login Form */}
        <div className="px-8 py-6 bg-white">
          <div className="mb-5">
            <h3 className="text-gray-900 text-center mb-1" style={{ fontSize: '22px', fontWeight: '600' }}>
              Welcome Back
            </h3>
            <p className="text-gray-500 text-center" style={{ fontSize: '13px' }}>
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-gray-700" style={{ fontSize: '13px', fontWeight: '500' }}>
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700" style={{ fontSize: '13px', fontWeight: '500' }}>
                  Password
                </Label>
                <a 
                  href="#" 
                  className="text-orange-500 hover:text-orange-600 transition-colors" 
                  style={{ fontSize: '12px', fontWeight: '500' }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-offset-0" 
              />
              <label htmlFor="remember" className="ml-2 text-gray-600 cursor-pointer" style={{ fontSize: '13px' }}>
                Remember me for 30 days
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-10 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-orange-500/30"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Sign In
            </Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center" style={{ fontSize: '12px' }}>
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <Button 
            type="button"
            variant="outline"
            className="w-full h-10 border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700 transition-all"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            <FileText className="w-4 h-4 mr-2 text-orange-500" />
            Single Sign-On with LoanFactory
          </Button>

          <div className="mt-4 text-center">
            <p className="text-gray-500" style={{ fontSize: '13px' }}>
              Don't have an account?{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors" style={{ fontWeight: '600' }}>
                Contact Admin
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-400 text-center" style={{ fontSize: '11px' }}>
            Secured with industry-standard encryption
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}