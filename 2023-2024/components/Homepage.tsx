import Image from 'next/image'
import Link from 'next/link'

import CSUNLibrary from 'public/library.jpg'

const data: { name: string; slug: string }[] = [
	{
		name: 'Group 1',
		slug: 'group-1',
	},
	{
		name: 'Group 2',
		slug: 'group-2',
	},
	{
		name: 'Group 3',
		slug: 'group-3',
	},
	{
		name: 'Group 4',
		slug: 'group-4',
	},
]

export function Homepage() {
	return (
		<div className='w-full mx-auto max-w-5xl mt-4 relative p-4'>
			<div className='w-full h-96 relative mb-4'>
				<Image src={CSUNLibrary} fill alt='CSUN Library' className='rounded-lg shadow object-cover' />
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
				{data.map((group) => (
					<Link key={group.slug} href={`/${group.slug}`}>
						<div className='bg-csun-red/5 text-csun-red p-12 flex items-center justify-center text-3xl font-bold rounded-lg border-2 border-transparent hover:border-csun-red transition-all'>
							<h2>{group.name}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
