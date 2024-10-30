import cn from '@/utils/helper/cn';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { Slot, Slottable } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'leading-6 flex items-center justify-center gap-1 shadow-md rounded-lg w-fit normal-case transition-all !duration-300 active:scale-80 disabled:opacity-50 group',
  {
    variants: {
      size: {
        xs: 'px-3 py-1 text-xs',
        small: 'px-4 py-2 font-medium text-sm',
        medium: 'px-4 py-2 md:px-8 md:py-4 font-semibold md:font-bold text-sm md:text-lg',
      },
      variant: {
        text: "border-0 shadow-none bg-transparent",
        contained: 'border-2',
        outlined: 'border-2',
        borderLeft: '',

      },
      color: {
        primary: 'text-strongWhite bg-primary border-primary hover:bg-transparent hover:text-primary',
        red: 'text-strongWhite bg-red border-red hover:bg-transparent hover:text-red',
        sky: 'text-strongWhite bg-skyThree border-skyThree hover:bg-transparent hover:text-skyThree',
        secondary: 'text-strongWhite bg-secondary border-secondary hover:bg-transparent hover:text-secondary',
        redThree: 'text-strongWhite bg-redThree border-redThree hover:bg-transparent hover:text-redThree',
        skyTwo: 'text-strongWhite bg-skyTwo border-skyTwo hover:bg-transparent hover:text-skyTwo',
        yellow: 'text-strongWhite bg-yellowTwo border-yellowTwo hover:bg-transparent hover:text-yellowTwo',
        purple: 'text-strongWhite bg-purpleTwo border-purpleTwo hover:bg-transparent hover:text-purpleTwo',
        purpleTwo: 'text-strongWhite bg-purpleTwo border-purpleTwo hover:bg-transparent hover:text-purpleTwo',
        secondaryTwo: 'text-strongWhite bg-secondaryTwo border-secondaryTwo hover:bg-transparent hover:text-secondaryTwo',
        green: 'text-strongWhite bg-green border-green hover:bg-transparent hover:text-green',
        yellowThree: 'text-strongWhite bg-yellowThree border-yellowThree hover:bg-transparent hover:text-yellowThree',
        yellowTwo: 'text-strongWhite bg-yellowTwo border-yellowTwo hover:bg-transparent hover:text-yellowTwo',
        green: 'text-strongWhite bg-green border-green hover:bg-transparent hover:text-green',
        skyFour: 'text-strongWhite bg-skyFour border-skyFour hover:bg-transparent hover:text-skyFour',
        white: 'text-green bg-white border-white hover:bg-transparent hover:text-white',
      },
    },
    compoundVariants: [
      {
        variant: "outlined",
        color: "sky",
        className: "bg-white text-sky border-sky hover:bg-sky hover:text-white",
      },
      {
        variant: "outlined",
        color: "white",
        className: "bg-white text-green border-white hover:bg-transparent hover:text-white",
      },
      {
        variant: "outlined",
        color: "primary",
        className: "bg-white text-primary border-primary hover:bg-primary hover:text-white",
      },
      {
        variant: "outlined",
        color: "secondary",
        className: "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white",
      },
      {
        variant: "outlined",
        color: "redThree",
        className: "bg-white text-redThree border-redThree hover:bg-redThree hover:text-white",
      },
      {
        variant: "outlined",
        color: "skyTwo",
        className: "bg-white text-skyTwo border-skyTwo hover:bg-skyTwo hover:text-white",
      },
      {
        variant: "outlined",
        color: "redTwo",
        className: "bg-white text-redTwo border-redTwo hover:bg-redTwo hover:text-white",
      },
      {
        variant: "outlined",
        color: "yellow",
        className: "bg-white text-yellowTwo border-yellowTwo hover:bg-yellowTwo hover:text-white",
      },
      {
        variant: "outlined",
        color: "secondaryTwo",
        className: "bg-white text-secondaryTwo border-secondaryTwo hover:bg-secondaryTwo hover:text-white",
      },
      {
        variant: "outlined",
        color: "green",
        className: "bg-white text-green border-green hover:bg-green hover:text-white",
      },
      {
        variant: "outlined",
        color: "skyFour",
        className: "bg-white text-skyFour border-skyFour hover:bg-skyFour hover:text-white",
      },
      {
        variant: "contained",
        disabled: true,
        className: "opacity-50 cursor-not-allowed",
      },


      // border left variant
      // common class for borderLeft variants
      {
        variant: "borderLeft",
        color: ["purple", "purpleTwo", "yellow", "redThree", "skyTwo", "sky", "primary", "secondary", "secondaryTwo", "green", "yellowThree", 'secondaryTwo'],
        className: "text-white md:bg-transparent border-l-4 hover:text-white"
      },
      // not common class for borderLeft variants
      {
        variant: "borderLeft",
        color: "purple",
        className: "md:text-purple bg-purple border-purple hover:bg-purple ",
      },
      {
        variant: "borderLeft",
        color: "purpleTwo",
        className: "md:text-purpleTwo bg-purpleTwo border-purpleTwo hover:bg-purpleTwo ",
      },
      {
        variant: "borderLeft",
        color: "yellow",
        className: "md:text-yellow bg-yellow border-yellow hover:bg-yellow",
      },
      {
        variant: "borderLeft",
        color: "redThree",
        className: "md:text-redThree bg-redThree border-redThree hover:bg-redThree",
      },
      {
        variant: "borderLeft",
        color: "skyTwo",
        className: "md:text-skyTwo bg-skyTwo border-skyTwo hover:bg-skyTwo",
      },
      {
        variant: "borderLeft",
        color: "sky",
        className: "md:text-sky bg-sky border-sky hover:bg-sky",
      },
      {
        variant: "borderLeft",
        color: "primary",
        className: "md:text-primary bg-primary  border-primary hover:bg-primary",
      },
      {
        variant: "borderLeft",
        color: "secondary",
        className: "md:text-secondary bg-secondary border-secondary hover:bg-secondary",
      },
      {
        variant: "borderLeft",
        color: "secondaryTwo",
        className: "md:text-secondaryTwo bg-secondaryTwo border-secondaryTwo hover:bg-secondaryTwo",
      },
      {
        variant: "borderLeft",
        color: "green",
        className: "md:text-green bg-green border-green hover:bg-green",
      },
      {
        variant: "borderLeft",
        color: "yellowThree",
        className: "md:text-yellowThree bg-yellowThree border-yellowThree hover:bg-yellowThree",
      },
      {
        variant: "borderLeft",
        color: "skyFour",
        className: "md:text-skyFour bg-skyFour border-skyFour hover:bg-skyFour",
      },

      // text button variants
      // common for text variant
      {
        variant: "text",
        color: ["primary", "secondary", "red", "redThree", "skyTwo", "yellow", "yellowTwo", "purple", "secondaryTwo", "sky", "green", "yellowThree", 'secondaryTwo'],
        className: "px-0 py-0 md:px-0 md:py-0"
      },

      // not common for text variant
      {
        variant: "text",
        color: "primary",
        className: "bg-transparent text-primary hover:text-primary md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "secondaryTwo",
        className: "bg-transparent text-secondaryTwo hover:text-secondaryTwo md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "secondary",
        className: "bg-transparent text-secondary hover:text-secondary md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "red",
        className: "bg-transparent text-red hover:text-red md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "redThree",
        className: "bg-transparent text-redThree hover:text-redThree md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "skyTwo",
        className: "bg-transparent text-skyTwo hover:text-skyTwo md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "yellow",
        className: "bg-transparent text-yellow hover:text-yellow md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "yellowTwo",
        className: "bg-transparent text-yellowTwo hover:text-yellowTwo md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "green",
        className: "bg-transparent text-green hover:text-green md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "yellowThree",
        className: "text-white bg-transparent text-yellowThree hover:text-yellowThree md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "secondaryTwo",
        className: "text-white bg-transparent text-secondaryTwo hover:text-secondaryTwo md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "green",
        className: "text-white bg-transparent text-green hover:text-green md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "sky",
        className: "text-white bg-transparent text-sky hover:text-sky md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "skyThree",
        className: "text-white bg-transparent text-skyThree hover:text-skyThree md:bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "skyFour",
        className: "text-white bg-transparent text-skyFour hover:text-skyFour md:bg-transparent hover:bg-transparent",
      },
    ],
    defaultVariants: {
      variant: 'contained',
      size: 'medium',
      color: 'secondary',
    },
  },
);

const Button = forwardRef(
  ({ className, variant, size, color, startIcon, endIcon, children, asChild, rightMove, ...rest }, ref) => {
    const combinedClasses = cn(buttonVariants({ variant, size, color }), className);
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp ref={ref} className={combinedClasses} {...rest}>
        {startIcon && <span className='mr-2'>{startIcon}</span>}
        <Slottable>{children}</Slottable>
        {endIcon && <span className={cn("ml-2", {
          'group-hover:translate-x-1': rightMove
        })}>{endIcon}</span>}
      </Comp>
    );
  },
);

export default Button;
