import { Component } from '@angular/core';
import { Contact }    from '../contact';
@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'html/contact.component.html'
})
export class ContactComponent {
    model = new Contact("", "","","");
    submitted = false;
    onSubmit() { this.submitted = true; }
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    newHero() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}