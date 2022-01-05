import ActiveLink from './ActiveLink'
const navigationPayroll = [
  {
    'name': "Map",
    'url': "/"
  },
  {
    'name': "List",
    'url': "/list",
    'newtab': true
  }
]

function HousingNav() {
  return <div className="bg-black">
    <nav className="flex flex-row">
      {navigationPayroll.map((item, itemIdx) =>
                     
              
                     <ActiveLink activeClassName="text-gray-100 py-3 px-6 block hover:text-green-300 focus:outline-none text-green-300 border-b-2 font-medium border-green-300" href={item.url}
                     settarget={item.newtab}
                     key={itemIdx}
                     
                     >
                     <a className="text-gray-600 py-3 px-6 block hover:text-green-300 focus:outline-none"
                 
                     >
                                                 {item.name}
                                                 
                     </a>
                     </ActiveLink>
                     
                   )}
  </nav></div>
}

export default HousingNav