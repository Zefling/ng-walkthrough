import { Component } from '@angular/core';

import { WalkthroughText } from '../src';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

    frenchText: WalkthroughText = {
        previous: 'Précédent',
        next: 'Suivant',
        close: 'Fermer'
    }

}