import { useRouter } from 'next/router';
import DetailsProduct from '../../components/detailsProduct';
import NavBar from '../../components/NavBar';

const Details = () => {
  const router = useRouter()
  const { id } = router.query;

  return (
    <>
      <NavBar />
      <DetailsProduct id={id as string} />
    </>
  );
}

export default Details;