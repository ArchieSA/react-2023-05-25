import { Menu } from '@/components/Menu/Menu';
import { menuActions } from '@/redux/features/menu';
import { selectMenuIds } from '@/redux/features/menu/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MenuContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  dispatch(menuActions.setIds(restaurantId));

  const menuIds = useSelector(selectMenuIds);

  if (!menuIds?.length) {
    return <span>Empty Menu</span>;
  }

  return <Menu menuIds={menuIds} {...props} />;
};
