export default function Input({type,text,handleOnChange,value,placeholder,maxLength,minLength,name}){
    return(
        <div>
            <label>{text}</label>
            <input
                type={type}
                text={text}
                onChange={handleOnChange}
                value={value}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder}
                name={name}
                required
            />
        </div>
    );
}
