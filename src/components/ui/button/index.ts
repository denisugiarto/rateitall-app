import { cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
	'inline-flex items-center justify-start rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray-800',
	{
		variants: {
			variant: {
				outline: 'shadow-md shadow-lg border',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				text: 'text-primary justify-center',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'rounded-2xl px-3 py-2 text-xl gap-x-2',
				icon: 'h-10 w-10',
			},
      color: {
        default: 'bg-background hover:bg-slate-50 hover:text-accent-foreground',
				primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				transparent: 'bg-transparent'
			},
		},
		defaultVariants: {
			variant: null,
			size: 'default',
			color: 'default',
		},
	}
);
