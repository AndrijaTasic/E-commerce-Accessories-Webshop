import { InputBaseComponentProps } from "@mui/material";
import { forwardRef, useRef, useImperativeHandle } from "react";

interface Props extends InputBaseComponentProps { }

export const StripeInput = forwardRef(function StripeInput({ component: Component, ...props }: Props,
    ref: React.Ref<unknown>) {
    const elementRef = useRef<any>();

    useImperativeHandle(ref, () => ({
        focus: () => elementRef.current.focus
    }));

    return (
        <Component
            onReady={(element: any) => (elementRef.current = element)}
            {...props}
        />
    )
});