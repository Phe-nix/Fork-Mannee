import { useEffect, useState } from "react";
import { format } from "date-fns";

import FormEditAddSub from "../components/FormEditAddSub";

export default function EditSubscription({ navigation, route }) {
    console.log(route.params);
    const { name, price, img, color, firstbill, cycle, daytopay } = route.params;

    return (
        <FormEditAddSub Subprice={price.toString()} Subname={name} Subcolor={color}
        Subimg={img} Subdate={firstbill} Subcycle={cycle}/>
    );
}
