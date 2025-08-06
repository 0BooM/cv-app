export default function Input({
    labelHtmlFor,
    labelContent,
    type,
    placeholder,
    id,
    name,
    data,
    onChange,
}) {
    return (
        <div className='text-lg mb-4 flex flex-col items-start'>
            <label htmlFor={labelHtmlFor} className='mb-1'>{labelContent}</label>
            <input
                type={type}
                id={id}
                className='border px-3 py-1 rounded-md w-full'
                placeholder={placeholder}
                name={name}
                value={data}
                onChange={onChange}
            />
        </div>
    );
}