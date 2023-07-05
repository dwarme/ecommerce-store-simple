import React from 'react'
import BuystripDelivery from './BuystripDelivery'
import BuystripItem from './BuystripItem'
import BuystripReturn from './BuystripReturn'
import { ThemeBuystripProps } from '../../../types/theme/theme-product'

const Buystrip: React.FC<ThemeBuystripProps> = ({data}) => {
	const { items, buystripReturn, buystripDelivery } = data
	return (
		<div className="rf-flagship-buystrip">
			<ul className="row as-buystrip">
				{buystripDelivery &&
					<BuystripDelivery title={buystripDelivery.title} />
				}

				{buystripReturn &&
					<BuystripReturn title={buystripReturn.title}/>
				}

				{items?.map(item=>
					<BuystripItem 
						icon={item.icon}
						title={item.title}
					/>	
				)}
			</ul>
		</div>
	)
}

export default React.memo(Buystrip);