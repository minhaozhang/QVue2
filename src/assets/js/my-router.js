import Home from 'src/views/home/Index';
import News from 'src/views/news/Index';
import Optional from 'src/views/optional/Index'
import HSQuote from 'src/views/quote/hs/Home'

const router = [
  {path: '/index',component:Home},
  {path: '/news',component:News},
  {path: '/optional',component: Optional},
  {path: '/hs-quote',component:HSQuote}
]

export default router

