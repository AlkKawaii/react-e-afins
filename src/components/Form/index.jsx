import styles from './Form.module.css';

export default function Form() {
    return (
        <section className={styles.container}>
            <h2>Cadastrar Artigo</h2>
            <form>
                <div>
                    <label htmlFor='title'>Título do Artigo</label>
                    <input type='text' id='title' required />
                </div>
                <div>
                    <label htmlFor='selection'></label>
                    <select id='selection'>
                        <option value='placeholder'>Placeholder</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </section>
    );
}
