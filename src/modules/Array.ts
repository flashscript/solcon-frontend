interface Array<T>
{
	search(id: number): any[]
	update(id: number, value: any): void
	delete(id: number): void
	orderBy(params: any): void
}

Array.prototype.search = function (id: number): any[]
{
	return this[this.indexOf(this.find((i: any) => i.id == id))]
}

Array.prototype.update = function (id: number, value: any): void
{
	this[this.indexOf(this.find((i: any) => i.id == id))] = value
}

Array.prototype.delete = function (id: number): void
{
	this.splice(this.indexOf( this.find( (item: any) => item.id == id ) ), 1)
}

Array.prototype.orderBy = function (params: any): void
{
	Object.entries(params).map((p: any) => {
		const [key, value] = p
		Object.entries(value).map((val: any) => {
			const [k, v] = val
			if (k == 'order')
			{
				if (v == 'desc')
					this.sort((a, b) => (b[key] < a[key])? 1 : -1 )
				else if (v == 'asc')
					this.sort((a, b) => (b[key] > a[key])? 1 : -1 )
			}
		})
	})
}