import { useState } from 'react'

export default function Tabs() {
    const[activeTab, setActiveTab] = useState('about');
  return (
    <div className='p-5 border-2 border-be-mist-900'>
        <div className='flex gap-1'>
            <button onClick={() => setActiveTab('about')} className='p-1 bg-emerald-600 text-white'>Вкладка 1</button>
            <button onClick={() => setActiveTab('serv')} className='p-1 bg-emerald-600 text-white'>Вкладка 2</button>
            <button  onClick={() => setActiveTab('contacts')} className='p-1 bg-emerald-600 text-white'>Вкладка 3</button>
        </div>
        <div className='border-t-2 border-amber-50 p-5'>
            {activeTab === 'about' && <p>Содержимое вкладки 1</p>}
            {activeTab === 'serv' && <p>Содержимое вкладки 2</p>}
            {activeTab === 'contacts' && <p>Содержимое вкладки 3</p>}
        </div>
    </div>
  )
}
