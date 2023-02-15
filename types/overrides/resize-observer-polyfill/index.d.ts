// resize-observer-polyfill types conflict with typescript's own typings on typescript > 4.2.2
// See https://github.com/que-etc/resize-observer-polyfill/issues/83
//
// So we override the typings for resize-observer-polyfill and remove the DOMRectReadOnly interface
// definition
// https://raw.githubusercontent.com/que-etc/resize-observer-polyfill/master/src/index.d.ts

declare global {
    interface ResizeObserverCallback {
        (entries: ResizeObserverEntry[], observer: ResizeObserver): void
    }

    interface ResizeObserverEntry {
        readonly target: Element;
        readonly contentRect: DOMRectReadOnly;
    }

    interface ResizeObserver {
        observe(target: Element): void;
        unobserve(target: Element): void;
        disconnect(): void;
    }
}

declare var ResizeObserver: {
    prototype: ResizeObserver;
    new(callback: ResizeObserverCallback): ResizeObserver;
}

interface ResizeObserver {
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

export default ResizeObserver;
