/* eslint-disable */
import type { Prisma, ClerkSessionEvents } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateClerkSessionEvents(options?: Omit<(UseMutationOptions<(ClerkSessionEvents | undefined), DefaultError, Prisma.ClerkSessionEventsCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsCreateArgs, DefaultError, ClerkSessionEvents, true>('ClerkSessionEvents', 'POST', `${endpoint}/clerkSessionEvents/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkSessionEvents(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkSessionEventsCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkSessionEvents', 'POST', `${endpoint}/clerkSessionEvents/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsFindManyArgs, TQueryFnData = Array<Prisma.ClerkSessionEventsGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkSessionEventsFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsFindManyArgs, TQueryFnData = Array<Prisma.ClerkSessionEventsGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkSessionEventsFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/findMany`, args, options, fetch);
}

export function useFindUniqueClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsFindUniqueArgs, TQueryFnData = Prisma.ClerkSessionEventsGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkSessionEventsFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/findUnique`, args, options, fetch);
}

export function useFindFirstClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsFindFirstArgs, TQueryFnData = Prisma.ClerkSessionEventsGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkSessionEventsFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/findFirst`, args, options, fetch);
}

export function useUpdateClerkSessionEvents(options?: Omit<(UseMutationOptions<(ClerkSessionEvents | undefined), DefaultError, Prisma.ClerkSessionEventsUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsUpdateArgs, DefaultError, ClerkSessionEvents, true>('ClerkSessionEvents', 'PUT', `${endpoint}/clerkSessionEvents/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkSessionEvents(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkSessionEventsUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkSessionEvents', 'PUT', `${endpoint}/clerkSessionEvents/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkSessionEvents(options?: Omit<(UseMutationOptions<(ClerkSessionEvents | undefined), DefaultError, Prisma.ClerkSessionEventsUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsUpsertArgs, DefaultError, ClerkSessionEvents, true>('ClerkSessionEvents', 'POST', `${endpoint}/clerkSessionEvents/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkSessionEvents(options?: Omit<(UseMutationOptions<(ClerkSessionEvents | undefined), DefaultError, Prisma.ClerkSessionEventsDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsDeleteArgs, DefaultError, ClerkSessionEvents, true>('ClerkSessionEvents', 'DELETE', `${endpoint}/clerkSessionEvents/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkSessionEvents, Prisma.ClerkSessionEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkSessionEvents(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkSessionEventsDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkSessionEventsDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkSessionEvents', 'DELETE', `${endpoint}/clerkSessionEvents/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkSessionEventsDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkSessionEventsDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkSessionEventsDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsAggregateArgs, TQueryFnData = Prisma.GetClerkSessionEventsAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkSessionEventsAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/aggregate`, args, options, fetch);
}

export function useGroupByClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkSessionEventsGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkSessionEventsGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkSessionEventsGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkSessionEventsGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkSessionEventsGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkSessionEventsGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkSessionEventsGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/groupBy`, args, options, fetch);
}

export function useCountClerkSessionEvents<TArgs extends Prisma.ClerkSessionEventsCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkSessionEventsCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkSessionEventsCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/count`, args, options, fetch);
}

export function useCheckClerkSessionEvents<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { eventID?: string; fromUserID?: string; sessionID?: string; clientID?: string; sessionStatus?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkSessionEvents', `${endpoint}/clerkSessionEvents/check`, args, options, fetch);
}
