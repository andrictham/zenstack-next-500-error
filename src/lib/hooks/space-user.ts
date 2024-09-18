/* eslint-disable */
import type { Prisma, Space_User } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateSpace_User(options?: Omit<(UseMutationOptions<(Space_User | undefined), DefaultError, Prisma.Space_UserCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserCreateArgs, DefaultError, Space_User, true>('Space_User', 'POST', `${endpoint}/space_User/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManySpace_User(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.Space_UserCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Space_User', 'POST', `${endpoint}/space_User/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManySpace_User<TArgs extends Prisma.Space_UserFindManyArgs, TQueryFnData = Array<Prisma.Space_UserGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.Space_UserFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/findMany`, args, options, fetch);
}

export function useInfiniteFindManySpace_User<TArgs extends Prisma.Space_UserFindManyArgs, TQueryFnData = Array<Prisma.Space_UserGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.Space_UserFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/findMany`, args, options, fetch);
}

export function useFindUniqueSpace_User<TArgs extends Prisma.Space_UserFindUniqueArgs, TQueryFnData = Prisma.Space_UserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.Space_UserFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/findUnique`, args, options, fetch);
}

export function useFindFirstSpace_User<TArgs extends Prisma.Space_UserFindFirstArgs, TQueryFnData = Prisma.Space_UserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.Space_UserFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/findFirst`, args, options, fetch);
}

export function useUpdateSpace_User(options?: Omit<(UseMutationOptions<(Space_User | undefined), DefaultError, Prisma.Space_UserUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserUpdateArgs, DefaultError, Space_User, true>('Space_User', 'PUT', `${endpoint}/space_User/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManySpace_User(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.Space_UserUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Space_User', 'PUT', `${endpoint}/space_User/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertSpace_User(options?: Omit<(UseMutationOptions<(Space_User | undefined), DefaultError, Prisma.Space_UserUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserUpsertArgs, DefaultError, Space_User, true>('Space_User', 'POST', `${endpoint}/space_User/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteSpace_User(options?: Omit<(UseMutationOptions<(Space_User | undefined), DefaultError, Prisma.Space_UserDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserDeleteArgs, DefaultError, Space_User, true>('Space_User', 'DELETE', `${endpoint}/space_User/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Space_User, Prisma.Space_UserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManySpace_User(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.Space_UserDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.Space_UserDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Space_User', 'DELETE', `${endpoint}/space_User/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.Space_UserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.Space_UserDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.Space_UserDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateSpace_User<TArgs extends Prisma.Space_UserAggregateArgs, TQueryFnData = Prisma.GetSpace_UserAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.Space_UserAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/aggregate`, args, options, fetch);
}

export function useGroupBySpace_User<TArgs extends Prisma.Space_UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.Space_UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.Space_UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.Space_UserGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.Space_UserGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.Space_UserGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.Space_UserGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.Space_UserGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/groupBy`, args, options, fetch);
}

export function useCountSpace_User<TArgs extends Prisma.Space_UserCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.Space_UserCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.Space_UserCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space_User', `${endpoint}/space_User/count`, args, options, fetch);
}

export function useCheckSpace_User<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; spaceId?: string; userId?: string; role?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Space_User', `${endpoint}/space_User/check`, args, options, fetch);
}
