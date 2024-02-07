interface DefaultInputProps {
    type: string;
    id: string;
    placeholder: string;
}

export default function DefaultInput({ type, id, placeholder }: DefaultInputProps) {
    return (
        <input
            type={type}
            id={id}
            className="mt-1 pl-4 h-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder={placeholder}
        />
    );
}
