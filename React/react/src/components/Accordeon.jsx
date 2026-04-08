import {useState} from 'react'

export default function Accordeon() {
    const [isOpen, setIsOpen] = useState(false);
    function StatusMessage() {
        if (isOpen) {
            return <p>Блок открыт</p> 
        } else {
            return <p>Блок закрыт</p>
        }
    }
  return (
    <div>
        {isOpen}
        <button onClick={() => setIsOpen(!isOpen)} className='bg-emerald-600 p-2 text-white pointer'>Что такое React</button>
        {/* {
            isOpen &&
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil cupiditate accusamus sit, enim vitae, praesentium libero natus reiciendis molestiae voluptatem, pariatur distinctio. Dolor eius amet atque nam accusamus! Cum.
            </p>
        } */}
        {
            isOpen ? <p>Блок открыт</p> : <p>Блок закрыт</p>
        }
        <StatusMessage/>
    </div>
  )
}
