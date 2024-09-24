


export const Get_All_Item_Actions = async () => {

    const res = await fetch(`${process.env.FRONTEND_BASE_URL}/items?sortBy=-createdAt&limit=9`);



    return res.json();
}