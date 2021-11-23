import { Provider } from 'react-redux'
import { store } from '../app/store'
import { Provider as AuthProvider } from 'next-auth/client';
import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }) {
  return (
    //gives app access to Next-auth state (higher-order component)
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default App
