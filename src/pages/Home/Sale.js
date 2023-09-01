import SaleCards from "../../components/organisms/SaleCards"
import { data } from '../../data/saleCards/saleCards'
import MainSection from "../../components/templates/MainSection"

function Sale() {
	const contents = <SaleCards data={ data } isColumn={ true } />;

	return (
		<MainSection contents={ contents } />
	)
}

export default Sale