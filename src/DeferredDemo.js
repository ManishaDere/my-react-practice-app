import React, { Fragment, Suspense, useDeferredValue, useEffect, useState } from 'react'

const DeferredDemo = () => {
    const [query, setQuery] = useState('');
    const defferedQuery = useDeferredValue(query);
    const list = ["Apple", "Abacus", "Mango", "Orange", "per"];
    const [filteredList, setFilteredList] = useState(list);
    const isStale = query !== defferedQuery;
    useEffect(() => {
        setFilteredList(filteredList.filter(item => item.toLowerCase().includes(query.toLowerCase())));
    }, [query]);
    
    return (
        <Fragment>
            Search Query: <input type='text' onChange={(e) => setQuery(e.target.value)} value={query} />
            <Suspense fallback={<h3>Loading...</h3>}>
                <ul>
                    {filteredList.map(item => (
                        <li key={item} style={{ opacity: isStale ? 0.5 : 1}}>{item}</li>
                    ))}
                </ul>
            </Suspense>
        </Fragment>
    )
}

export default DeferredDemo