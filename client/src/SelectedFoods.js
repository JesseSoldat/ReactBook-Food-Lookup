import React from 'react';

export default function SelectedFoods(props) {
	return (
	<table className='ui selectable structured large table'>
		<thead>
			<tr>
				<th colSpan='5'>
					<h3>Selected foods</h3>
				</th>
			</tr>
			<tr>
				<th className='eight wide'>Description</th>
				<th>Kcal</th>
				<th>Protein (g)</th>
				<th>Fat (g)</th>
				<th>Carbs (g)</th>
			</tr>
		</thead>
	</table>
	);
}