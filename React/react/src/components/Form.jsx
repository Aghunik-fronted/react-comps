import {useState} from 'react'

export default function Form() {
    // const [name, setName] = useState('');
    // const [topic, setTopic] = useState('react')
    // const [isAgree, setIsAgree] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        topic: 'react',
        isAgree: false,
    })
    const [errorName, setErrorName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (formData.name.trim() === '') {
            setErrorName('Введите имя');
            return
        }
        setErrorName('');
        console.log(formData);
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input value={formData.name} 
                type="text" 
                placeholder='Введите имя' 
                onChange={(event) => setFormData({...formData, name:event.target.value})}
                className='border-2 border-be-mist-950 p-1' />
                {errorName && <p className='text-red-600'>{errorName}</p>}
        </div>
        <select value={formData.topic} onChange={(event) => setFormData(...formData, event.target.value)}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option angular="react">Angular</option>
        </select>
        <div>
            <input type="checkbox" checked={formData.isAgree} onChange={(event) => setIsAgree(event.target.checked)}/>
            <p>Примите условия</p>
        </div>
        <button type='submit' className='bg-emerald-600 p-2 text-white rounded-sm'>Отправить</button>
    </form>
  )
}
