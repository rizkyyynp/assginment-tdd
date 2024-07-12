export type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
    disabled?: boolean; 
};