import './Add.scss';

const Add = () => {
    return (
        <div className="add">
            <div className="container">
                <h1>Add New Gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="e.g. I will do something I'm really good at" />
                        <label htmlFor="">Category</label>
                        <select name="cats" id="cats">
                            <option value="design">Design</option>
                            <option value="web">Web Development</option>
                            <option value="animation">Animation</option>
                            <option value="music">Music</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" />
                        <label htmlFor="">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Description your service to customer"
                        ></textarea>
                        <button>Create</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service Title</label>
                        <input type="text" placeholder="e.g. One-page web design" />
                        <label htmlFor="">Short Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Short description of your service"
                        ></textarea>
                        <label htmlFor="">Delivery Time (e.g. 3 days)</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Revision Number</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Add Features</label>
                        <form action="" className="add">
                            <input type="text" placeholder="e.g. page design" name="" id="" />
                            <button type="submit">add</button>
                        </form>
                        <label htmlFor="">Price</label>
                        <input type="number" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
