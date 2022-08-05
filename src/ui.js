export class ChatUI {
    constructor(list) {
        this.list = list;
    }
    clear() {
        this.list.innerHTML = ''; 
    }
    async render(data) {
        const timstamp = data.created_at ? data.created_at.toDate() : new Date();
        const when = dateFns.distanceInWordsToNow(timstamp, { addSuffix: true });
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.list.innerHTML += html;
    }
}