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
  return <div className="bg-black flex flex-col">
    <nav className="flex flex-row">
      {navigationPayroll.map((item, itemIdx) =>
                     
              
                     <ActiveLink activeClassName="text-gray-100 py-3 px-6 block hover:text-green-300 focus:outline-none text-green-300 border-b-2 font-medium border-green-300" href={item.url}
                     key={itemIdx}
                     >
                     <a className="text-gray-100 py-3 px-6 block hover:text-green-300 focus:outline-none underline"
                          target={`${item.newtab === true ? "_blank" : ""}`}
                     >
                                                 {item.name}
                     </a>
                     </ActiveLink>
                     
                   )}
  </nav></div>
}

export default HousingNav