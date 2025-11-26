import { useState } from 'react';
import { AdminProfile } from './components/AdminProfile';
import { WebsiteSettings } from './components/WebsiteSettings';
import { WebsiteConfigProvider } from './contexts/WebsiteConfigContext';
import { LoginModal } from './components/LoginModal';
import { TransactionsDashboard } from './features/transactions/components/TransactionsDashboard';
import { TransactionDetail } from './features/transactions/components/TransactionDetail';
import { DemoForm } from './features/transactions/components/DemoForm';

export type Transaction = {
  id: string;
  clientName: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  price: number;
  type: 'Purchase' | 'Listing' | 'Lease Listing';
  status: 'Pre-contract' | 'Under Contract' | 'Closed';
  closingDate?: string;
  listDate?: string;
  contractDate?: string;
  image: string;
  mlsNumber?: string;
  modifiedDate?: string;
  lostDeals?: number;
};

export type View = 'dashboard' | 'detail' | 'profile' | 'demoform' | 'settings';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLoginModal(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleViewTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setCurrentView('detail');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedTransaction(null);
  };

  const handleViewProfile = () => {
    setCurrentView('profile');
  };

  const handleViewDemoForm = () => {
    setCurrentView('demoform');
  };

  const handleViewSettings = () => {
    setCurrentView('settings');
  };

  return (
    <WebsiteConfigProvider>
      {!isAuthenticated ? (
        <>
          <LoginModal 
            open={showLoginModal} 
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        </>
      ) : (
        <div className="min-h-screen bg-gray-50">
          {currentView === 'dashboard' && (
            <TransactionsDashboard 
              onViewTransaction={handleViewTransaction}
              onViewProfile={handleViewProfile}
              onViewDemoForm={handleViewDemoForm}
              onViewSettings={handleViewSettings}
            />
          )}
          {currentView === 'detail' && selectedTransaction && (
            <TransactionDetail 
              transaction={selectedTransaction}
              onBack={handleBackToDashboard}
            />
          )}
          {currentView === 'profile' && (
            <AdminProfile />
          )}
          {currentView === 'demoform' && (
            <DemoForm onBack={handleBackToDashboard} />
          )}
          {currentView === 'settings' && (
            <WebsiteSettings onBack={handleBackToDashboard} />
          )}
        </div>
      )}
    </WebsiteConfigProvider>
  );
}