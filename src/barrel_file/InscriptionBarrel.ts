import { Component, Vue } from 'vue-property-decorator';
import { creerUtilisateur } from '../static-methodes/httpRequest';
import { confirmMotDePasse } from '../static-methodes/methodes';

@Component
export default class InscriptionMethods extends Vue {
    constructor() {
        super();
    }
}
