interface DefaultInputProps {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput({ type, id, name, placeholder, required, onChange }: DefaultInputProps) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            className="mt-1 pl-4 h-10 block w-full rounded-lg border-gray-300 shadow-sm outline-none"
            placeholder={placeholder}
            onChange={onChange ? onChange : () => {}}
            required={required ? required : false}
        />
    );
}
