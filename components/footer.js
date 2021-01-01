import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Desenvolvido com 💜 por Pedro Mello
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href="https://www.buymeacoffee.com/cicatr1z" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/blog/logo/buymeacoffee.svg"
                className="mx-3 bg-black hover:bg-purple-900 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                width="240"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
