import { Avatar } from '@mui/material';
import React from 'react';

import './Sidebar.css';

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAPDxAPDw8PDxAPDQ8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tKy0tLSstKy0rLS0tLS0tKy0tLSstLS0tLS0rKy0rLSsrLS0tLS0tLSstLS0tN//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGCAf/xAA2EAACAQIEAwUIAQQCAwAAAAAAAQIDEQQSITFBUWEFInGB0RMyQlKRobHB4QZicoIjMxRDkv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAjEQEBAQACAgIDAAMBAAAAAAAAAQIDESExEkEEE1EiMmEU/9oADAMBAAIRAxEAPwDBgw8GLQYeDKvMMQYaDF4MPTCBqirj8ZKEXKWy+/QVw6tq9EtX4CWJxntJae5H3evU5O+VcT2dSrScnHJJ8YaW8tmKz7Fqw1jaoumkvp6Gnh2aNBhT1XmqN1o001umrNGhQkb8sPCorTipcm914Mzsb2fGH/VLNL5JcP8AZBZd5v0mnVUVduyXFgavajlpDurn8T9DIxHtU/8AkTXL5fLgEosPaNx17aNJj1FmfRY9SZyOqdhINGYnGQWMji5OQkM0cRKOz8nsZ8JBoyAvltUMdF+93eu6H6dnqndc0ebjIYoVpRd4toFacb/r0MUFijMw3aXCa84+hqUJxkrxafgLW3FlXSLpExiXURWnMQkTYtYmwFIqcWsQ0cNVKl2i8KLfRBJ5voG19g1PD8/oHhBLYkHak4/6hHEkHGccccc583QmGhMz4VA0ag7HY0YVBvDsyqcy2LxuRZYvvtf/ACufiEth3tDHX/44vRe+1xfygqDMygzQoMBL4atBj9KaSu3ZGRGuo9XyO9q5bv0QyGmtPHN6R0XPi/QrTkJU2aNPDuy114oKWhY2as0mnwaugM+y6ctY9x9NY/QJG630GabOQ1Wc8DUhurrnHUmEjZgytTDwnutea0YWe57Z0ZBoyJqYCS915ly2YDVOzTT5PQDpOjcJBoyEoSDRkBXJ2Eg0JCUJB4SAtk5CQxSqNO6bT5p2YlCQeEhWjLZw3aklpNZlzWkv5NShioT9168no/oeYjIIpga8clj1VybmBh+0px37y67/AFNLD4+E9E7SfB/rmBackpxs6Kb2LQpc/oGSscrM2+1YU0urLkXIucp4npJxFyLnB2tci5W5Fw9Fulrkg7kndB8ny5GoGhUEIzCqqkrvZBSsPzxKhG/F7LmxOE23du7bu2JSrObu/JckM0WcWzpo0GaNBmZQZoUGFn3TVSOz8mWpstT1VnxOw1FuWXlu+gWe1o4ClfvPy9TUpoXoxsklwGqaGQ1RoxT31Lf+Ny+jJpoYiFHV7K3tvoWjIacE91cDPDNe7r04gLIhSLSSkrNJ+IBMupHHgc8Evhduj1X1ASpyjuvPdD6kXixTzMIQYeEg0sNF7d19PQG8PJdV09AKZzRYSDwYpBh4yBVsmlIspAaEJTdopt9OHibWD7NjHWdpS5fCvUC2ZaWwmEnU192PzP8AXM18Ph4U9ld8ZPd+hdyKuQVPEHjXa4+TDwxSe+n4M9yKOYenfvuWxmOuZEK7js7fgYp49fErdVsd8Tz8rN9+D1yLgo1E9U7+Bzkd0e8gjZVyKORVyD0neQTMcCzEB6J+x8qxmBqV8zstl9+ovVrcF5+h1Nk23o5SY7RYhSY5RZ0R20aLH6LM6ix2ixmTdadDWy5m9DB5Ip/F8f6EOxMN/wCx/wCvqegpxvo9noPGTVJU0NU0C9nlbXL8B6aOR1oemgqBxCIKcXRdFEXQFImdNS3XnxFqmFa27y+42i6ApMysxMJGQ9UoRlutea3FqmElHVd5dN/oA0xY6MgsWLRY7gsJOo+6tOMnsvUVTMVcFLdeo5huxJS1k3GPy/E/Q1MHgoU9fel8z/XIbuBqzifZajSjTWWKyr8+L4hMwRsVqzV9Au1fiI5lHMC5lXMaRDWxnMo5gXMtGLe+iG6Qu+1nMjOWcVawrKVtAxLeujEarWqbXgMU+0H8Sv1W5muZVzG6TnPrPqt2FeMtnf8AJLmYHtAsO0ZLfvL7h+J5+Z37bOckzF2nT5tdMrOO6N++f18rQD02GjgcyTi7Oy0ewKVKUHaSa/D8GZX0F1KZpMcosRpMcpMKGz9Fmt2XhnUml8K1k+nIx8Om2ktW3ZLmz2vZeFVOCjx3k+bGjDy66amHjZJLRLRLkh+ihKih+iijHrScTRusy3W/gDgjQpITrU8smuHDwCja5F0DRdCjBEwiBIvE5WCovEHEJEVXIiDUotuyTb5ILhMDKWr7seu78Ea+HoxgrRVub4vxYGrjxaTpdjQfeqLXkv3zG3QcVou6trLbyGUy1xe2mcWSOc7OM1aKl0fNGdjM0FtfquHiFPcufKcRiOC8xV1RWVUqpt6LUaMW+Tsy6p0Ly2+vArTo/Nr04BnMZO/9XhFLq+ZLmAcyHMJLrofOLYrn9TnMq5jRHeu4XdUq6gCu8rtw4eAJ1RmLWjUqoCdcWqVgVFSqTUI7v6JcWznZ8mPbHHoKEIwiopK0VbVavqcHpf4PnbCR0XgjTpUVJWkk0+DV0I4OOkfBfg1sNEzR7vNrqlKvYN9aTt/ZJ6eT9RGVCcHlnFxfJrfw5nr8PE18D2bDEPLUipQWsrr7J8GN8O2b/wBeper5ec/p7BW/5ZLV+4uS+Y9NRQ/X/p+2tF3S+CW66J+opGlKLyyTi1wasw9dJb5Pl5N0UP0UJUEP0UNGbWjdMjF0s0breOvlxOgMQCGWQi6LYqjklbg9V4ciiEPBEEQOCvotTSwuA4z0/tW/mwK5nYGHoym7RXi+CNjCYKMNX3pc3svBFqaSVkklyQZMDXx5kGiy6YGLCRYtasipk3B3KzqJK7Ar30vUqWF3MiKlLX78A0IJePM5O26J1ezIz19x9OPkL1MM6fDTmtUzWcirY0qO+HN9e2K5FXI0MRg4vWPdf2M2vSlDdee6HjDy41lzkVcgbkVchmXVEcirkUciuYZHVRiYZl1Wq9DKqVTUcjH7UWV5ltLfow1CzugVax6LsbCeyhml/wBk9X/bHhExuwsJ7SXtZe5B91fNP0R6GdQ7M+zzwM6hwo6hw49vxWlQyqPJxi19NjTw0TsNQzU4rjli142C4eJmketycnfbQwlJyaSV23ZHsuz8MqcVFeLfNmR2Fg8q9o95Lu9I8/M9BRRSRjtNUkGnhoVFacVJcOa8HwB0kN00F0rKrdiyjrTeZfK9JfyAUWnZpprdNWZ6SBarhoTVpK/J7NeYB/X8vTApjEA9fsuUdYd9cviXqBpQbdrO/wCAB8bL5Ri6OeGm8dV+0I4bDSn0XN/o9Dh8Olq9X9gGLp5ZabS1X7QKvMXrsLD0Yw2WvFvcZiwCYSLFquR4sJFgIsJFitOR0y6YKIxTo8Xp0FrRmKohU7u8teS4IvKa2WiIucfpZsq5FXIq5HFulnIq2UciHIZK6Xcird99SmYjMFK0riMCnrF5Xy+H+DNrU5QdpK34fmbdys7NWauuTHlZOThzr14YLkQ5GhiOz09YO3R7fUzK0ZR0kmmPK8/kxrPtE5go4b279n827+VfMDnM3+zML7KF378tZdOUQu48d0rGmqSVOKsoKy9f2CnUHe0oXWZbrfwMapVG7T3n466GdUgSdU44Hi+zl3If4x/CNbBdnZ55rdxe91fBeZndk03JU4rVuMUvoe4weHjGCgtravm+ZLMbeS351FCI9SQrTjZ2fAdojJWmaSGqaF6YzALpRoB4AqUbjlKCQuq28WLVqVLnoFnhoSWq15rRnRYWJK16OMZ66IVMHKO3eXTf6C9elni1x3XibSK1KEZbqz5rcHyHX4sv+ryiYSLHO0+zpQlmis0Xq7cH4CdCnKWiXnwQe2T9es6+NgsWM0KDl0XNhKGFUd9X9kNIS1r4+L+up01Hb68QdarwXmVr1baLfiATArdfUEuQ5FHIq5BJau5FXIo5FXIKV0u5FXIo5EZhkrV8xGYo5FcwU7RMxXMUciMwU7V8wOslJWaTXJkORNCm5yUV4t8kEs8+AcF2Ms3tVtH3Yv5ud+g3UunZ6GmrJJLRLRA6iUlZq500pfxs9f4+GTOR5vtKHs5NcHrHw5HqsTg3vB36Pf6mF2rQzwcbWnHWN9NeXmPKx83DfuMJ1jjMniLNkHdofA1/TGFyU4Tku9KEbf2xsvyekoyMjAvuQ/wj+EadGQJ6V3e7Tc48eW/gFospSYWlS16DJU1SHaNPmL0rIYhI6q8eZ9moMNFisJBoSJ1v46ZiwsWLxYWLErZijxYSIOnC4eKsJa2YzXOF1qLTw8Xws+g4gVVcRe1NYhCdFx6rmgFarlVlv+OppSnYTr4aMtdnzW30CjvPXpnXJuWq0ZR325rYC5BZ749ruRVyKORVyClrSzkVcijkQ5BStWciHIo5FXIZO0TMQ5FMxVyCnaJcq5FMxWUgktWlI1cJSyR/uesvQRwFP43/AK+o45nLcc68jOZRzAyqA5VALdjSmL4iMZq0kn+V4MrKoBnVAPth4v8ApWlUnKeeSzO9rHGu6pweyfqx/HksE+7H/GP4NKjIycG+7H/Ffg0qLHjzN+2lRY5TZn0WNwkMn2dhIPCQlCQxCQKvg5CQaDFaV3olc0KGH4y16cCdrdxZuvS1KLY7TppdWUiEiydr0uPjmRUWQOJdCtMXR0ldEJkNgP2RnJ3d+BXMFxsPi8n+mK5gs2vFGzClfDReq7r+30COZRzDE9WVnVqco7rz4AXI1ZSFK2FT1jo+XAZl3n+E3Iq5HVYuO69Adws1q7kRmBuRDkMnau5EZijZGYJLV3I6lDO7cOPgBlLgPUY5Vbjx8TnYnZnNbRbLYrKoAlUByqHNEo0qgOVQBKoCnVAeDTqgJ1QE6ovUrANDLrECDrHHH6ZWEfdj4L8GlQZlYV6LwX4NKgx48bdaNKQxCQlCQ9hKEp7aLm9v5D2TGbb4HhI0cNhW9ZaLlx/g7C4eMOr5v9chyMhLXocPB96HoxUdErB4sWiw0WJXo48DxYSLAxYSLFaMjJl0CiROpwXmBXvoVyJuCiy1znfJaSTTT4mTV7rafA1LiPadPTOuGj8Dk+X12UcyrmAdQq6g0jFrQzmVcwDmVcw9JXQ0pX31FauHXw6dOBZ1CHMbpLV7JzTWjVijkOSkno9RepR5fQKGgsxVyKy030Igsz6cQp+zGGj8T8vULKoBlUAyqHLZHlVByqC8qoGVUCsMSqgJ1QE6wvOsBWQepWFqlYBUrC1SscpIZdYgz3WOAp8R8LsvBGnhouTSW72OOHjwdea28HgUtZ958vhXqakGccc18eZPQ8GFiyThGrAsGGiyDgNORosNFnHCtGUVattFu/sikGcccFvdGiy1zjgGlc5FJapp7NWfgccENV53FRySceT08OABzOOGjz9+1XMq5nHDI2ocyrmccFK1DmRnOOCS1SpK+jAZrbHHHOyFOoBnVJOAtkGVUDOqQccrkCdUWqVjjgK5LVKwrVrEnAWyB7Q4445R/9k=" />
                <Avatar className="sidebar__avatar"/>
                <h2>Ankit Srivastava</h2>
                <h4>ankitsrivas14@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,651</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,473</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;