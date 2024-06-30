import React, {ButtonHTMLAttributes, FC, forwardRef} from 'react';
import {VariantProps, cva} from "class-variance-authority";
import {cn} from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
            },
            size: {
                default: "h-10 py-2 px-4",
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         className, size,
         variant,
         ...props
     }, ref) => {
        return <button ref={ref} className={cn(buttonVariants({variant, size, className}))} {...props} />
    }
)

export {Button, buttonVariants};