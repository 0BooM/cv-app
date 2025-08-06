import '../styles/styles.css';
import toggleSection from '../hooks/toggleSection';
import Input from './Input';

export default function GeneralInfo({data, dataSetter}) {
    const [isOpen, toggle] = toggleSection(true);

    function onInputChange(e) {
        dataSetter({...data, [e.target.name]: e.target.value});
    }
    return (
        <div className='flex flex-col p-4'>
            <button className='mb-4 flex items-center justify-between' onClick={toggle}>
                <h2 className='text-2xl font-bold self-center mr-2'>Your General Informations</h2>
                <span className={`transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>▶</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'h-max opacity-100' : 'max-h-0 opacity-0'}`}>
                <Input labelHtmlFor="fullName" labelContent="Full Name:" type="text" placeholder="John Doe" id="fullName" name="name" data={data.name} onChange={onInputChange}></Input>
                <Input labelHtmlFor="email" labelContent="E-mail: " type="email" placeholder="example@email.com" id="email" name="email" data={data.email} onChange={onInputChange}></Input>
                <Input labelHtmlFor="phone" labelContent="Phone number: " type="text" placeholder="124-567-890" id="email" name="phone" data={data.phone} onChange={onInputChange}></Input>
            </div>
        </div>
    )
}