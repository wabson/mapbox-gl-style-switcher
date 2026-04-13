import type { Map, IControl, ControlPosition } from 'mapbox-gl';

export interface StyleOption {
    uri: string;
    title: string;
    className: string;
}

export interface StyleSwitcherOptions {
    styles?: StyleOption[];
}

const DEFAULT_CONTROL_POSITION: ControlPosition = 'top-right';

const DEFAULT_STYLES: StyleOption[] = [
    {
        uri: 'mapbox://styles/mapbox/satellite-streets-v11',
        title: 'Satellite',
        className: 'style-satellite'
    },
    {
        uri: 'mapbox://styles/mapbox/streets-v11',
        title: 'Streets',
        className: 'style-streets'
    }
];

class StyleSwitcherControl implements IControl {
    private styles: StyleOption[];
    private _map: Map | undefined;
    private _container: HTMLElement | undefined;

    constructor(options: StyleSwitcherOptions = {}) {
        this.styles = options.styles || DEFAULT_STYLES;
    }

    onAdd(map: Map): HTMLElement {
        this._map = map;

        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapbox-ctrl-styles';

        const sprite = (map.getStyle() as { sprite?: string }).sprite;
        const currentStyle = sprite ? sprite.replace('sprites', 'styles') : '';

        const stylesElement = document.createElement('div');
        stylesElement.className = 'styles';
        const activeStylesElement = document.createElement('div');
        activeStylesElement.className = 'styles-current';

        for (const style of this.styles) {
            const styleElement = document.createElement('div');
            styleElement.className = `style-button ${style.className}`;
            if (currentStyle === style.uri) {
                activeStylesElement.appendChild(styleElement);
            } else {
                stylesElement.appendChild(styleElement);
            }
            styleElement.setAttribute('title', style.title);
            styleElement.setAttribute('data-style-uri', style.uri);
        }

        this._container.appendChild(stylesElement);
        this._container.appendChild(activeStylesElement);

        this.registerDomEvents();
        return this._container;
    }

    getDefaultPosition(): ControlPosition {
        return DEFAULT_CONTROL_POSITION;
    }

    private registerDomEvents(): void {
        for (const buttonEl of this._container!.querySelectorAll('.style-button')) {
            buttonEl.addEventListener('click', this.onClickStyleButton.bind(this));
        }
    }

    private onClickStyleButton(e: Event): void {
        const target = e.target as HTMLElement;
        const styleUri = target.dataset['styleUri']!;
        this._map!.setStyle(styleUri);

        const stylesElement = this._container!.querySelector('div.styles')!;
        const activeStylesElement = this._container!.querySelector('div.styles-current')!;
        for (const buttonEl of this._container!.querySelectorAll('.style-button')) {
            stylesElement.appendChild(buttonEl);
        }
        activeStylesElement.appendChild(target);
    }

    onRemove(): void {
        this._container!.parentNode!.removeChild(this._container!);
        this._map = undefined;
    }
}

export default StyleSwitcherControl;
