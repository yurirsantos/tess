import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logoTess from '../../Assets/TESS-Sem-fundo.png'
import { Link } from 'react-router-dom'
import IconTess from '../../Assets/IconTESSPequenoSemFundo.png'

const navigation = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Serviços',
    href: '/Services'
  },
  {
    title: 'Contatos',
    href: '/Contacts'
    // },
    // {
    //   title: 'Portifólio',
    //   href: '/Portfolio'
    //
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  return (
    <Popover className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="w-auto h-14" src={logoTess} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map(item => {
              return (
                <Link key={item.title} to={item.href}>
                  <span className="text-lg font-medium text-white hover:text-gray-600 hover:bg-gray-200 p-2 rounded-md">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-neutral-700 divide-y-2">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={IconTess} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-neutral-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navigation.map(item => (
                    <Link key={item.title} to={item.href}>
                      <span className="text-lg font-medium text-white hover:text-gray-600 hover:bg-gray-200 p-2 rounded-md">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
