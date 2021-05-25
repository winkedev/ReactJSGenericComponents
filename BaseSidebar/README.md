# Exemplo BaseSidebar

```
import React from 'react';
import BaseSidebar from '../../components/BaseSidebar';
import { ReactComponent as ListSVG } from '../../assets/list.svg';

<BaseSidebar
            logoImage={<img src={JostLogo} />}
            logoTitle="Test Title"
            username="springnsoo"
            itemsObject={[
                {
                    id: "test",
                    text: "relatórioX",
                    icon: <ListSVG />,
                    child: [
                        {
                            id: "relx",
                            text: "reX",
                            icon: <ListSVG />,
                            onClickEvent: () => console.log("Clicked"),
                            isLocked: true
                        },
                        {
                            id: "relas",
                            text: "relas",
                            icon: <ListSVG />,
                            isLocked: false,
                            hideLocked: false
                        }
                    ]
                },
                {
                    id: "teste2",
                    text: "relat",
                    icon: <ListSVG />,
                    isLocked: true,
                    hideLocked: false
                }

            ]}
            onLogoutEvent={() => alert("Logout")}
            hasMouseOverEffect={false}
        />
