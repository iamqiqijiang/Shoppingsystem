package cn.edu.zhku.liya.domain;


public class Book {
	private String id;
	private String goodname;			//商品名
	private int price;				//价格
	private String address;      		//地址ַ
	private int salesvolume;           //销量
	private String shop;               //店名
	private int num;                   //数量
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getGoodname() {
		return goodname;
	}
	public void setGoodname(String goodname) {
		this.goodname = goodname;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getSalesvolume() {
		return salesvolume;
	}
	public void setSalesvolume(int salesvolume) {
		this.salesvolume = salesvolume;
	}
	public String getShop() {
		return shop;
	}
	public void setShop(String shop) {
		this.shop = shop;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	private String category;
	
}



