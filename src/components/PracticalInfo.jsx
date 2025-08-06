import '../styles/styles.css';
import toggleSection from '../hooks/toggleSection';
import Input from './Input';

export default function PracticalInfo({data, dataSetter}) {
    const [isOpen, toggle] = toggleSection(false);

    function onInputChange(e){
        dataSetter({...data, [e.target.name]: e.target.value});
    }

    return (
        <div className='flex flex-col p-4'>
            <button className='mb-4 flex items-center justify-between' onClick={toggle}>
                <h2 className='text-2xl font-bold self-center mr-2'>Your Practical Informations</h2>
                <span className={`transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>▶</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'h-max opacity-100' : 'max-h-0 opacity-0'}`}>
                <Input labelHtmlFor="company" labelContent="Company name:" type="text" placeholder="Some Company" id="company" name="company" data={data.company} onChange={onInputChange}></Input>
                <Input labelHtmlFor="position" labelContent="Position title:" type="text" placeholder="Your job position" id="position" name="position" data={data.position} onChange={onInputChange}></Input>
                <div className='text-lg mb-4 flex flex-col items-start'>
                    <label htmlFor="responsibilities" className='mb-1'>Job responsibilities:</label>
                    <textarea id="responsibilities" className='border px-3 py-1 rounded-md w-full' placeholder='What were you doing there?' name='responsibilities' data={data.responsibilities} onChange={onInputChange}/>
                </div>
                <Input labelHtmlFor="jobDateStart" labelContent="Start date:" type="date" id="jobDateStart" name="jobDateStart" data={data.jobDateStart} onChange={onInputChange}></Input>
                <Input labelHtmlFor="jobDateEnd" labelContent="End date:" type="date" id="jobDateEnd" name="jobDateEnd" data={data.jobDateEnd} onChange={onInputChange}></Input>
            </div>
        </div>
    )
}