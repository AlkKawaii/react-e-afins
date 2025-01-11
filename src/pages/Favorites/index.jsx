import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import ArticleList from '../../components/ArticleList';
import { useFavoriteContext } from '../../hooks/useFavoriteContext';

export default function Favorites() {
    const { favorite } = useFavoriteContext();

    return (
        <>
            <Header />
            <Container>
              <h2>Aqui estão seus favoritos!</h2>
                <ArticleList
                    articles={favorite}
                    emptyHeading={'Nenhum Favorito :('}
                />
            </Container>
            <Footer />
        </>
    );
}
