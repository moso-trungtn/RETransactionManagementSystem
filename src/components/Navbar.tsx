import { Bell } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useWebsiteConfig } from '../contexts/WebsiteConfigContext';

interface NavbarProps {
  onViewProfile?: () => void;
  onViewDemoForm?: () => void;
  onViewSettings?: () => void;
  onViewTransactions?: () => void;
}

export function Navbar({ onViewProfile, onViewDemoForm, onViewSettings, onViewTransactions }: NavbarProps) {
  const { config } = useWebsiteConfig();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <ImageWithFallback 
              src={config.companyLogo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          
          <nav className="flex gap-6">
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={onViewDemoForm}
            >
              Demo Form
            </button>
            <button 
              className={onViewTransactions ? "text-gray-600 hover:text-gray-900" : "px-4 py-2 bg-gray-100 rounded"}
              onClick={onViewTransactions}
            >
              Transactions
            </button>
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={onViewSettings}
            >
              Website Settings
            </button>
            <button className="text-gray-600 hover:text-gray-900">Templates</button>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onViewProfile}
            className="rounded-full"
          >
            <Avatar>
              <AvatarFallback className="bg-yellow-400 text-white">
                A
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  );
}
