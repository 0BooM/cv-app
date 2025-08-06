import '../styles/styles.css';
import toggleSection from '../hooks/toggleSection';
import Input from './Input';

export default function EducationalInfo({data, dataSetter}) {
    const [isOpen, toggle ] = toggleSection(false);

    function onInputChange(e){
        dataSetter({...data, [e.target.name]: e.target.value});
    }

    return (
        <div className='flex flex-col p-4'>
            <button className='mb-4 flex items-center justify-between' onClick={toggle}>
                <h2 className='text-2xl font-bold self-center mr-2'>Your Educational Informations</h2>
                <span className={`transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>▶</span>
            </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'h-max opacity-100' : 'max-h-0 opacity-0'}`}>
                    <Input labelHtmlFor="school" labelContent="School Name:" type="text" placeholder="Harvard University" id="school" name="school" data={data.school} onChange={onInputChange}></Input>
                    <Input labelHtmlFor="studyTitle" labelContent="Study title:" type="text" placeholder="Bachelors degree" id="studyTitle" name="studyTitle" data={data.studyTitle} onChange={onInputChange}></Input>
                    <Input labelHtmlFor="schoolDateStart" labelContent="Start date:" type="date" id="schoolDateStart" name="schoolDateStart" data={data.schoolDateStart} onChange={onInputChange}></Input>
                    <Input labelHtmlFor="schoolDateEnd" labelContent="End date:" type="date" id="schoolDateEnd" name="schoolDateEnd" data={data.schoolDateEnd} onChange={onInputChange}></Input>
                </div>
        </div>
    )
}