import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@layouts/Home/Home.component'))

export default function HomePage() {
  return <Home />
}
